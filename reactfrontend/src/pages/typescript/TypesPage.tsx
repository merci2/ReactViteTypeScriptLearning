//src/pages/typescript/TypesPage.tsx
import { useState } from 'react'

// Beispiel Interfaces und Types
interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

type Product = {
  id: number
  title: string
  price: number
  inStock: boolean
}

function TypesPage() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'Max Mustermann',
    email: 'max@example.com',
    role: 'user'
  })

  return (
    <>
      <h1 className="page-title">Types & Interfaces 🔷</h1>

      {/* Interface vs Type */}
      <div className="lesson-box">
        <h2>1. Interface vs Type Alias</h2>
        <div className="code-box">
          <code>
{`// Interface (erweitbar)
interface User {
  id: number
  name: string
}

interface User {
  email: string  // ✅ Erweitert User
}

// Type Alias (nicht erweitbar)
type Product = {
  id: number
  title: string
}

// Beide können extended werden
interface Admin extends User {
  permissions: string[]
}

type AdminProduct = Product & {
  adminOnly: boolean
}`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          💡 Regel: Nutze <strong>interface</strong> für Objekte, <strong>type</strong> für Unions/Primitives
        </p>
      </div>

      {/* Interface Beispiel */}
      <div className="lesson-box">
        <h2>2. Interface für React Props</h2>
        <div className="code-box">
          <code>
{`interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean           // Optional
  variant?: 'primary' | 'secondary'
}

function Button({ text, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={variant}
    >
      {text}
    </button>
  )
}`}
          </code>
        </div>
        <div className="demo-result">
          User: {user.name} ({user.role})
        </div>
        <button onClick={() => setUser({ ...user, role: user.role === 'admin' ? 'user' : 'admin' })}>
          Toggle Role
        </button>
      </div>

      {/* Generics */}
      <div className="lesson-box">
        <h2>3. Generics (flexible Typen)</h2>
        <div className="code-box">
          <code>
{`// Generic Function
function identity<T>(value: T): T {
  return value
}

const num = identity<number>(42)       // T = number
const str = identity<string>("Hello")  // T = string

// Generic mit Array
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}

getFirst([1, 2, 3])           // number | undefined
getFirst(["a", "b", "c"])     // string | undefined

// Generic Interface
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Max", email: "max@test.de", role: "user" },
  status: 200,
  message: "Success"
}`}
          </code>
        </div>
      </div>

      {/* Utility Types */}
      <div className="lesson-box">
        <h2>4. Utility Types (eingebaute Helfer)</h2>
        <div className="code-box">
          <code>
{`interface User {
  id: number
  name: string
  email: string
  password: string
}

// Partial - alle Props optional
type UpdateUser = Partial<User>
// { id?: number, name?: string, ... }

// Pick - nur bestimmte Props
type UserPreview = Pick<User, 'id' | 'name'>
// { id: number, name: string }

// Omit - Props ausschließen
type PublicUser = Omit<User, 'password'>
// { id: number, name: string, email: string }

// Required - alle Props required
type RequiredUser = Required<Partial<User>>

// Readonly - Props unveränderbar
type ImmutableUser = Readonly<User>

// Record - Object mit bestimmten Keys
type UserRoles = Record<string, User>
// { [key: string]: User }`}
          </code>
        </div>
      </div>

      {/* Type Guards */}
      <div className="lesson-box">
        <h2>5. Type Guards (Typ-Prüfung)</h2>
        <div className="code-box">
          <code>
{`// typeof Guard
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())  // string methods
  } else {
    console.log(value.toFixed(2))     // number methods
  }
}

// instanceof Guard
function handleError(error: Error | string) {
  if (error instanceof Error) {
    console.log(error.message)
  } else {
    console.log(error)
  }
}

// Custom Type Guard
interface Dog {
  bark: () => void
}

interface Cat {
  meow: () => void
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined
}

function handlePet(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark()  // TypeScript weiß: pet ist Dog
  } else {
    pet.meow()  // TypeScript weiß: pet ist Cat
  }
}`}
          </code>
        </div>
      </div>

      {/* Enums */}
      <div className="lesson-box">
        <h2>6. Enums (Aufzählungen)</h2>
        <div className="code-box">
          <code>
{`// Numeric Enum
enum Status {
  Pending = 0,
  Active = 1,
  Inactive = 2
}

let userStatus: Status = Status.Active

// String Enum (besser lesbar)
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

// Const Enum (bessere Performance)
const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// Alternative: Union Type (moderner)
type RoleType = "admin" | "user" | "guest"`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          💡 Tipp: Union Types sind oft besser als Enums (einfacher, kein Runtime-Code)
        </p>
      </div>

      {/* Erklärung */}
      <div className="lesson-box">
        <h2>📚 Wichtige Konzepte</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Interface:</strong> Für Objekt-Shapes, erweitbar</li>
          <li><strong>Type Alias:</strong> Für Unions, Primitives, Intersections</li>
          <li><strong>Generics:</strong> Flexible, wiederverwendbare Typen mit &lt;T&gt;</li>
          <li><strong>Utility Types:</strong> Partial, Pick, Omit, etc. sparen Zeit</li>
          <li><strong>Type Guards:</strong> Runtime-Prüfungen für Type-Safety</li>
          <li><strong>Union Types &gt; Enums:</strong> Einfacher und moderner</li>
        </ul>
      </div>
    </>
  )
}

export default TypesPage