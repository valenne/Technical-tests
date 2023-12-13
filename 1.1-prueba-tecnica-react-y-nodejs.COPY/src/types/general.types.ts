export type TypeID = `${string}-${string}-${string}-${string}-${string}`

export interface Video_Games_props {
  id: TypeID
  name: string
  date: string
  url: string
  descripcion: string
}

export interface InputProps {
  id: string
  name: string
  type: string
  placeholder?: string
  error: string
  required: boolean
  pattern?: string
  label: string
}
