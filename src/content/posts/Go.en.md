---
title: "Notes on Getting Started with Go"
date: 2022-12-07 17:43:33
categories:
  - 计算机工程
tags:
  - 计算机基础
  - 编程
lang: en
sourceHash: 9903f8e3f855d39d
translatedFrom: mixed
translationStatus: reviewed
---

## Why Go? Core Strengths

Hardware has evolved relentlessly, yet programming languages have not always kept pace. Even a modern smartphone packs more CPU cores than our first PC, while production servers routinely ship with 64, 128, or more cores—yet much of our software is still written with single-core idioms. Team collaboration has changed too: large systems are built across time zones as composable libraries and packages, leaning heavily on open source.

Go was designed from the ground up to make code sharing effortless, with first-class tooling for consuming and publishing packages. **Go rethinks traditional object-oriented programming with cleaner code reuse, harnesses modern multi-core hardware effortlessly, and compiles huge codebases in seconds.**

Before Go, developers often faced an awkward trade-off: fast execution with sluggish builds (C++), decent builds with heavier runtimes (Java / .NET), or quick scripting with slower execution (dynamic languages). Go strikes a rare balance across all three: **fast compilation, high runtime performance, and simple developer ergonomics**.

Lightweight concurrency and automatic garbage collection make Go a natural fit for high-throughput backend systems and microservices.

**Go uses goroutines and channels to handle concurrency, making function calls "colorless"—there is no syntactic split between synchronous and asynchronous functions. Go's concurrency model follows CSP (Communicating Sequential Processes): *do not communicate by sharing memory; instead, share memory by communicating.***

### Compiler Pipeline & Language Highlights

Logically, the Go compiler runs through four stages: **lexing & parsing, type checking & AST transformation, generic SSA generation, and machine code generation**.
- **Lexer**: Converts raw source text into a stream of tokens.
- **Parser**: Reduces tokens according to the Go grammar into an abstract syntax tree representing each [SourceFile](https://golang.org/ref/spec#Source_file_organization)[5](https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-compile-intro/#fn:5).

Go supports effortless cross-compilation (e.g., building Windows binaries from Linux) and was the first mainstream language to embrace UTF-8 natively across both strings and source files.

For Go's philosophy on OOP, see the official FAQ: [Is Go an object-oriented language?](https://go.dev/doc/faq#Is_Go_an_object-oriented_language)

As the Go authors noted, stepping back to look at what would dominate software engineering—especially multi-core CPUs—pointed directly to first-class concurrency plus safe automatic memory management (garbage collection) to keep large concurrent codebases tractable.

**Statically typed, compiled, with implicit interfaces**: Interfaces can be introduced after the fact without annotating existing types, eliminating rigid class inheritance hierarchies.

UTF-8 is the universal encoding for text, XML, and JSON. Because Go strings natively store UTF-8 bytes (1 to 4 bytes per character, unlike Java's fixed 2-byte UTF-16), Go saves memory and avoids constant re-encoding overhead.

### Variables, Constants, and Basics

- `var a string` declares variables explicitly (with optional type inference).
- `:=` is short variable declaration—valid only inside functions, requiring at least one new variable on the left side (otherwise the compiler rejects it with `no new variables on left side of :=`).
- Referencing an undeclared variable yields `undefined: a`; unused local variables are compile-time errors.
- `_` is the blank identifier for discarding values.
- **`iota`** is Go's constant generator: it resets to `0` at each `const` keyword and increments by 1 per constant declaration line—ideal for enums.
- Passing a pointer passes the variable's address so mutations inside the callee affect the caller.

```go
// Anonymous functions in Go act as closures capturing surrounding variables
func getSequence() func() int {
	i := 0
	return func() int {
		i += 1
		return i
	}
}

func main() {
	nextNumber := getSequence()
	fmt.Println(nextNumber())
	fmt.Println(nextNumber())
	fmt.Println(nextNumber())

	nextNumber1 := getSequence()
	fmt.Println(nextNumber1())
	fmt.Println(nextNumber1())
}
```

### Naming Conventions

1. **Case-based visibility**: Go is case-sensitive and encodes visibility right in the identifier—**uppercase first letter = exported (`public`), lowercase first letter = package-private (`private`)**.
2. **Packages**: Match the directory name; keep them short, lowercase, meaningful, with no underscores or mixed case, avoiding standard-library collisions:
   ```go
   package domain
   package main
   ```
3. **Files**: Short, lowercase, underscore-separated (e.g., `approve_service.go`).
4. **Structs**: CamelCase, typically declared across multiple lines:
   ```go
   type MainConfig struct {
   	Port    string `json:"port"`
   	Address string `json:"address"`
   }
   config := MainConfig{"1234", "123.221.134"}
   ```

Format verb cheatsheet: `%v` default format, `%+v` includes struct field names, `%#v` outputs valid Go syntax representation.

### `defer`, Loop-Variable Pitfall, and `new` vs. `make`

- **`defer`**: Schedules a call to run in LIFO order right before the enclosing function returns.
- **Classic `for range` pointer trap** (pre–Go 1.22):

```go
func main() {
	slice := []int{0, 1, 2, 3}
	m := make(map[int]*int)
	for key, val := range slice {
		m[key] = &val // points to the single loop variable val
	}

	for k, v := range m {
		fmt.Println(k, "->", *v)
	}
}
```

In older Go versions, `val` was allocated once per loop and overwritten on each iteration, so `&val` pointed to the same memory slot holding the final value `3` after the loop finished.

- **`new` vs. `make`**:
  - `new(T)` allocates zeroed storage for any type `T` and returns `*T` (`p1 := new(int)`).
  - `make` initializes built-in reference types—`slice`, `map`, and `channel`—setting up their internal backing structures and returning an initialized value (not a pointer).

---

## Goroutines & Concurrency

Go's concurrency scheduler is built on the **GMP model**:

1. **G (Goroutine)**: A lightweight userspace execution unit managed by the Go runtime. Creating and destroying goroutines is orders of magnitude cheaper than OS threads, allowing tens of thousands to run concurrently.
2. **M (Machine)**: An OS thread responsible for executing goroutines, managed in a runtime thread pool.
3. **P (Processor)**: A logical processor bridging G and M. Each P maintains a local run queue of goroutines and dispatches them onto an attached M.

### Colorless Concurrency Explained

**The problem with "colored" functions**: In languages like JavaScript and Python, asynchronous functions must be marked `async` and called with `await`. This splits the world into synchronous vs. asynchronous ("colored") functions:
- Every caller interacting with an `async` function usually has to become `async` itself;
- Forgetting `await` causes subtle bugs.

**Go's approach — colorless concurrency**: Functions have no sync/async color. Any regular function can be launched concurrently with `go`, while goroutines coordinate cleanly over channels.

For example, in Go's `net/http` server, every incoming HTTP request automatically runs in its own lightweight goroutine multiplexed onto OS threads by the runtime—no manual thread-pool or callback plumbing required.

Instead of relying purely on locks around shared state, Go encourages passing ownership of values over channels so that at any given instant only one goroutine holds the resource, ruling out entire classes of data races by design.

```go
// Prefix a function call with `go` to launch a goroutine
go GetThingDone(param1, param2)

// Launch an anonymous function in a new goroutine
go func(param1, param2 string) {
	// do something...
}(val1, val2)
```

> Goroutines are lightweight userspace threads managed by the Go runtime rather than the OS kernel.

Because goroutines execute in parallel across multi-core CPUs, **channels** provide the idiomatic way to collect results and build producer-consumer pipelines.

### Channels

**Go channels are concurrent primitives, not inherently asynchronous.** Unbuffered channel sends and receives are synchronous handoffs; for non-blocking async behavior, pair goroutines with buffered channels or signaling patterns.

Optional arrow syntax (`<-`, binding to the leftmost `chan`) makes channels send-only or receive-only; without an arrow, a channel is bidirectional:

```go
ch <- v    // Send v to channel ch
v := <-ch  // Receive from ch and assign to v
```

Create a channel with `c := make(chan int)`.

#### Unbuffered (Synchronous) Channels

An unbuffered channel holds zero queued values: the sender blocks until a receiver is ready, and vice versa. Ideal for:
1. **Strict message ordering**;
2. **Signaling** (notifying another goroutine that work finished);
3. **Coordinating multiple goroutines**.

#### Buffered Channels

Specify capacity as the second argument to `make`, e.g., `ch := make(chan int, 100)`:
1. **Smooth producer/consumer speed mismatches** by buffering bursts;
2. **Bounded fire-and-forget asynchrony** (senders block only when the buffer fills);
3. **Higher throughput** for logging pipelines, worker pools, and internal message queues.

Remember: sending and receiving on an unbuffered channel must happen on concurrent goroutines—doing both sequentially on one goroutine causes a runtime deadlock panic.

#### `select` Multiplexing

`select` multiplexes across multiple channel operations:
- If multiple `case`s are ready, one is chosen pseudo-randomly;
- If none are ready, `default` executes if present; otherwise `select` blocks until one becomes ready;
- An empty `select {}` blocks forever (panicking with deadlock if no other goroutines remain).

```go
func (n *node) heartbeatDetect() {
	for {
		select {
		case <-n.heartbeat:
			// Heartbeat received; wait for next interval
			break
		case <-time.After(time.Second * 3):
			// Heartbeat timed out; close connection
			n.conn.Close()
			return
		}
	}
}
```

---

## Garbage Collection (GC)

Many developers picture GC as long Stop-The-World (STW) freezes. While early versions of Go used simpler STW collection, modern Go's collector is heavily concurrent and low-latency.

GC algorithms fall into two main families: **Tracing** and **Reference Counting**. Go uses a concurrent tracing collector to automatically identify and reclaim unreachable heap objects, preventing memory leaks.

Values whose lifetimes the compiler can prove stay local to a function live on the goroutine's **stack** and vanish when the function returns. Values that outlive their frame **escape to the heap** and are reclaimed by GC.

### Three Core Phases of Go's GC

1. **Tricolor Marking**:
   - Objects are classified as **white** (unvisited), **grey** (reachable, children unscanned), or **black** (reachable, all references scanned).
   - Starting from roots (globals, stack references), reachable objects turn grey and enter a work queue.
   - As scanning proceeds, grey objects turn black; anything still white at the end is unreachable garbage.
2. **Concurrent Marking**:
   - Marking runs concurrently alongside application goroutines, keeping STW pauses extremely brief.
3. **Sweeping and Reclamation**:
   - All remaining white objects are swept and their memory returned to the heap allocator.

### Evolution of Go's GC

- **Pre–Go 1.3**: Classic Stop-The-World mark-and-sweep;
- **Go 1.5**: Concurrent tricolor marking;
- **Go 1.8**: Hybrid write barrier, slashing STW rescan pauses even further.

**Tuning `GOGC`**: Defaulting to `100`, `GOGC` trades heap memory against GC CPU time—doubling `GOGC` roughly doubles heap headroom while cutting GC CPU overhead in half, which can also improve tail latency.

Tracing GC naturally handles **circular references** (where naive reference counting leaks), trading a bit of runtime CPU overhead for dramatically simpler memory-safe development.

### Stack, Heap, and Escape Analysis

- **Stack**: Function-local memory created on call and freed on return—blazingly fast and isolated to a single goroutine.
- **Heap**: Program-wide shared memory managed by GC—flexible across function boundaries, with higher allocation and synchronization costs.

**Escape analysis** is the compiler phase that analyzes variable scope to decide whether a value can stay safely on the stack or must escape to the heap.

---

## Syntactic Sugar & Core Data Types

**Variadic parameters and slice unpacking (`...`)**:
- Accept an arbitrary number of typed arguments in a function signature;
- Expand a slice into individual arguments:
  ```go
  arr2 := []int{1, 2, 3}
  arr1 = append(arr1, 0)
  arr1 = append(arr1, arr2...)
  ```

### Arrays, Strings, and Slices

All three share contiguous memory layouts underneath, with distinct high-level semantics:
- **Array**: Fixed-length **value type** where length is part of the type itself. Assigning or passing an array copies every element—expensive for large arrays, which is why slices or pointers are used instead.
- **String**: Read-only byte sequence; assigning copies only the header (pointer + length), never the underlying bytes.
- **Slice**: Mutable view over a backing array carrying pointer, length, and capacity. Passing a slice copies only its small header.

Handy primitives:
- Conversions: `strconv.Atoi` (string → int) and `strconv.Itoa` (int → string). Beware: `string(int)` interprets the integer as a Unicode code point, not decimal digits!
- **`rune`**: Alias for `int32`, representing a Unicode code point (essential for CJK and multi-byte characters).
- **`byte`**: Alias for `uint8` (0–255), representing raw binary data or ASCII bytes.

```go
fmt.Println([]byte("falcon"))
fmt.Println([]byte("čerešňa"))
// Output:
// [102 97 108 99 111 110]
// [196 141 101 114 101 197 161 197 136 97]
```

Passing **pointers** costs only 4 or 8 bytes regardless of target size and lets referenced objects live independently until no pointers remain.

---

## Slices

At runtime, a slice header looks like:

```go
type slice struct {
	array unsafe.Pointer
	len   int
	cap   int
}
```

At compile time it is represented by [`cmd/compile/internal/types.Slice`](https://draveness.me/golang/tree/cmd/compile/internal/types.Slice) and at runtime by [`reflect.SliceHeader`](https://draveness.me/golang/tree/reflect.SliceHeader):
- `Data`: Pointer to the backing array;
- `Len`: Current element count;
- `Cap`: Capacity of the backing array from the slice's start offset.

Classic `append` growth heuristic (early Go rules):
1. If required capacity exceeds `2×` current capacity, allocate the required capacity;
2. If current length `< 1024`, double capacity;
3. If current length `>= 1024`, grow by 25% increments until capacity suffices.

**Slice parameter nuance**: Mutating elements (`s[0] = 100`) inside a function modifies the caller's backing array, but re-slicing or `append`ing beyond capacity only updates the local slice header copy:

```go
package main

import "fmt"

func modifySlice(s []int) {
	s[0] = 100
	s = append(s, 200) // does not change caller's len or cap
}

func main() {
	original := []int{1, 2, 3, 4, 5}
	fmt.Println("Original Slice:", original)

	modifySlice(original)
	fmt.Println("After Modification:", original) // [100 2 3 4 5]

	slice := make([]int, 2, 10)
	slice1 := slice[1:2]
	slice2 := append(slice1, 1)
	slice2 = append(slice2, 1)
	slice2[0] = 10001
	fmt.Println(slice)
	fmt.Println(slice1)
	fmt.Println(cap(slice2))
}
```

### Shallow Copy vs. Deep Copy

- **Shallow copy**: Copies top-level values only; nested pointers/slices stay shared. Faster, but mutations bleed through.
- **Deep copy**: Recursively duplicates nested data structures for full isolation—safer in concurrent code at higher CPU/memory cost.

Go's built-in `copy(dst, src)` performs a **shallow copy**: if slice elements are pointers or reference types, only the references are copied.

Slicing intervals are **half-open `[start:end)`** (0-indexed), e.g., `old[5:]` takes elements from index 5 through the end.

### Strings and Time

- Indexing `s[i]` yields a **`byte`** (raw UTF-8 byte);
- Iterating with `for range` decodes **`rune`**s (full Unicode code points);
- `string` and `[]byte` share compatible header layouts (hence `copy(dst []byte, src string)` works), with the key difference that **strings are immutable**—reassignment simply redirects the header pointer to a new read-only buffer:

```go
s := "S1" // points to "S1"
s = "S2"  // redirected to "S2"

b := []byte{1}
b = []byte{2}
```

- `time.Time` represents an instant with nanosecond precision (handling wall clock and monotonic readings);
- `time.Duration` is an `int64` nanosecond count capable of spanning ~290 years.

---

## Pointers and Parameter Passing

- **Everything in Go is passed by value**;
- `slice`, `map`, `channel`, pointers, and interfaces appear reference-like only because their copied value contains an internal pointer to shared backing data.

```go
slice1 := make([]int, 3) // length 3, zero-initialized
var slice2 []int         // zero value is nil
if slice2 == nil {
	// ...
}
numbers = append(numbers, 2)
```

Pointer basics and `fmt.Printf` format verbs:

```go
var a int = 20 // actual variable
var ip *int    // pointer variable
ip = &a        // store address of a

fmt.Printf("Address of a: %x\n", &a)
fmt.Printf("Address stored in ip: %x\n", ip)
fmt.Printf("Value of *ip: %d\n", *ip)
```

| Category | Verbs | Description | Example Output |
| --- | --- | --- | --- |
| General | `%v` / `%+v` / `%#v` | Default / with struct field names / Go syntax | `{zhangsan}` / `{Name:zhangsan}` |
| Type | `%T` | Go type name | `main.Human` |
| Boolean | `%t` | `true` or `false` | `true` |
| Integer | `%b` / `%d` / `%o` / `%x` / `%X` | Binary / decimal / octal / hex | `101` / `18` / `12` / `d` / `D` |
| Char | `%c` / `%q` / `%U` | Unicode char / quoted literal / `U+XXXX` | `中` / `'中'` / `U+4E2D` |

### Maps

A `map` is an unordered key-value collection backed by a hash table for fast lookups; iteration order is intentionally non-deterministic.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/ed7dc340-8912-4511-bc8c-ded0e638ab91/Untitled.png)

```go
// Comma-ok idiom to check key presence
capital, ok := countryCapitalMap["American"]
```

The [`mapstructure`](https://github.com/mitchellh/mapstructure) library decodes generic `map[string]interface{}` maps into strongly typed Go structs—handy when parsing heterogeneous JSON streams via `encoding/json` before dispatching on a discriminator field.

---

## Functions, Methods, and Closures

A **method** is associated with a specific type/receiver; a **function** stands independently. Java and C# have only methods; C has only functions; C++, Python, and Go support both.

### Anonymous Functions and Closures

Anonymous functions (lambdas) can be invoked immediately or stored in variables as first-class values:

```go
// Immediately invoked anonymous function
func(data int) {
	fmt.Println("hello", data)
}(100)

// Assigned to a variable
f := func(data int) {
	fmt.Println("hello", data)
}
f(100)
```

**What is the `()` before a function name in Go?** That is the **receiver argument**, declaring which type the method operates on:

```go
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
```

Strictly speaking, an anonymous function is simply an unnamed function literal, whereas a **closure** pairs a function with references to its captured lexical environment. Compilers can lift anonymous functions that capture no free variables into plain function pointers (*lambda lifting*).

### `defer` Argument Evaluation & Order

Arguments to a `defer`red call are evaluated immediately when `defer` executes, while the call itself runs right before the enclosing function returns in **FILO** order—making `defer` ideal for cleanup:

```go
package main

import "fmt"

type Test struct {
	name string
}

func (t *Test) Close() {
	fmt.Println(t.name, " closed")
}

func Close(t Test) {
	t.Close()
}

func main() {
	ts := []Test{{"a"}, {"b"}, {"c"}}
	for _, t := range ts {
		defer Close(t)
	}
}
```

**Tip: Avoid careless closure captures inside goroutines (especially loop variables)!**

---

## Error Handling (`error`, `panic`, `recover`)

Go intentionally omits `try-catch` exceptions. Expected failures (like failing to open a file) are returned explicitly as `error` values, while `panic` and `recover` (inside `defer`) are reserved for truly exceptional or unrecoverable states.

- **`log.Panicln()`**: Logs an error message with context *before* triggering a panic.
- **`panic()`**: Immediately unwinds execution without logging, typically reserved for unrecoverable invariants.

---

## Reflection and Struct Tags

**Reflection** lets a program inspect its own types and modify behavior at runtime. While C/C++ offer minimal RTTI, Go embeds type metadata so code can inspect struct fields and metadata dynamically.

**Struct tags** (akin to C# Attributes) attach metadata to struct fields in the format `key1:"value1" key2:"value2"` (space-separated pairs, with **no space after the colon**). Common tags include `json`, `gorm`, `bson`, `form`, `binding`, and `mapstructure`:

```go
type Person struct {
	Name string `mapstructure:"username"`
}
```

---

## JSON and Protocol Buffers

In evolving backend systems, **Protocol Buffers (Protobuf)** shines over JSON thanks to **backward and forward compatibility via field numbering**:
- **JSON's trade-off**: Human-readable and flexible, but lacking a strict schema means renaming fields or changing types can break clients and force complex API versioning schemes.
- **Protobuf's advantages**:
  - **Backward compatibility**: Older clients safely ignore newly added field numbers;
  - **Forward compatibility**: Newer clients handle payloads from older servers gracefully;
  - **Compact binary serialization**: Generated `.proto` codecs serialize far faster and smaller than JSON—ideal for dense microservice RPCs.

Go JSON decoding tips:
- **`json.Decoder`**: Streaming decoder that reads values incrementally—ideal for HTTP bodies, sockets, and large files.
- **`json.Unmarshal`**: Decodes an entire `[]byte` buffer already in memory.
- **`json.Marshal`**: Encodes a Go value into JSON bytes.

```go
jsonStu, err := json.Marshal(stu)
if err != nil {
	fmt.Println("failed to marshal JSON")
}
```

Under the hood, JSON encoding/decoding uses reflection to inspect struct tags:

```go
// Pitfall: an extra space like `json: "type"` prevents tag parsing!
var u User
t := reflect.TypeOf(u)
for i := 0; i < t.NumField(); i++ {
	sf := t.Field(i)
	fmt.Println(sf.Tag.Get("json"), ",", sf.Tag.Get("bson"))
}
```

---

## Object-Oriented Patterns in Go

Go omits classes and classical inheritance, achieving OOP goals through **composition, receiver methods, and implicit interfaces**:

- **Polymorphism**: Any type implementing all methods of an interface satisfies it automatically—no `implements` keyword required.
- **Composition over inheritance**:
  ```go
  type Human struct{}

  type Superman struct {
  	Human // embeds Human's methods
  }
  ```

```go
type A interface {
	Get(k string) interface{}
	Set(k string, v interface{})
}

func NewA() A {
	return &a{}
}

type a struct{}

func (a0 *a) Get(k string) interface{} { return nil }
func (a0 *a) Set(k string, v interface{}) {}
```

### Factory Constructors and Receiver Types

By convention, constructors are named `NewXxx` and return a pointer (note that `new(File)` and `&File{}` are equivalent for structs):

```go
type File struct {
	fd   int    // file descriptor
	name string // file name
}

func NewFile(fd int, name string) *File {
	if fd < 0 {
		return nil
	}
	return &File{fd: fd, name: name}
}
```

**Value vs. pointer receivers**: Pairing receiver methods with interfaces lets shared logic operate across multiple types cleanly; use pointer receivers whenever a method must mutate the struct:

```go
type MyStruct struct {
	x int
}

func (m MyStruct) Set1() {
	m.x = 1 // mutates a copy only
}

func (m *MyStruct) Set2() {
	m.x = 2 // mutates the original struct
}
```

Note: `go get -u` updates modules providing packages named on the command line to newer minor or patch releases when available.

---

## Web Architecture, Routers, and Middleware

Go web frameworks broadly divide into **Router frameworks** and **MVC frameworks**, typically structured into three backend layers:

1. **Controller**: Entry point handling routing, request validation, and delegation.
2. **Logic / Service**: Core business rules and workflows assuming already-validated input.
3. **DAO / Repository**: Persistence layer encapsulating database/storage access behind clean interfaces.

### Routers & `net/http` Request Flow

`httprouter` uses a **compressed trie (Radix Tree)** for `O(n)` URL matching (where `n` is path length), trading modest memory for fast routing.

In `net/http`, `ServeMux` implements `http.Handler`:

```go
func (mux *ServeMux) ServeHTTP(w ResponseWriter, r *Request) {
	h, _ := mux.Handler(r)
	h.ServeHTTP(w, r)
}
```

The request chain flows cleanly: `HTTP Request -> ServeHTTP -> ServeMux.Handler -> Handler`. Because early default `ServeMux` lacked per-method routing, path variables, and automatic path normalization, third-party routers became the standard choice.

### Middleware & Distributed Infrastructure

Middleware cleanly separates cross-cutting non-business concerns (timeouts, logging, auth, rate limiting) into composable **onion-model** wrappers around HTTP handlers.

Tracing a single large-scale web request shows how middleware layers cooperate in production:

1. Browser resolves the domain via **DNS** to a public IP.
2. Reverse proxy **Tengine** filters and forwards the request to Service A.
3. Service A calls Service B over **Dubbo** RPC and reads cached factors from **Tair**.
4. Service A writes results to MySQL Master via connection pool **Druid** and database proxy **TDDL**.
5. Asynchronously, **Canal** tails MySQL Binlog replication and publishes events to **RocketMQ**.
6. Service C consumes those RocketMQ events and applies dynamic rules pulled from **ConfigServer**.

Other key distributed systems building blocks:
- **ZooKeeper**: Distributed coordination service providing configuration, naming, synchronization, and group services (historically required by Kafka).
- **Apache Flink**: Stateful distributed stream processing framework handling both unbounded and bounded data streams at in-memory speed and massive scale.
