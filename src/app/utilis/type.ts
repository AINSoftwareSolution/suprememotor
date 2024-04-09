
export type ServiceKeyPoint = {
  title: string;
  description: string;
}

export type Image = {
  src: string;
  alt: string;
  height: number | string;
  width: number | string
}

export type ServiceType = {
  title: string;
  image: any;
  logo: any;
  path: string;
  keyPoint: ServiceKeyPoint[];
  description: string;
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