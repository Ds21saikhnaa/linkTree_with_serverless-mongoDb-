export type Req = {
  email:string
  password: string
  repassword?: string
  name?: string
} 

export type User = {
  _id: string,
  name: string,
  email: string,
  proFile: string,
  createdAt: string,
  updatedAt: string,
  __v: 0
}

export type Datas = {
  success: boolean
  user: User[]
  data: Data[]
}

export type Data = {
  _id: string,
  title: string,
  userName: string,
  userId: User
  link: string,
  isHide: boolean,
  createdAt: string,
  updatedAt: string,
  __v: number
}