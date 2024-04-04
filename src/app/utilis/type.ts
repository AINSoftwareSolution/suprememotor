
export interface ServiceType {
  title: string;
  image: any
  logo:any
  path:string
}

export interface PathType {
  title: string,
  url: string,
  disabled: boolean
}

export interface FormData {
  name: string;
  email: string
  phone: string
}

export interface contactData {
  email: string,
  subject: string,
  message: string
}