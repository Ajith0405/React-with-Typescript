import { ReactNode } from 'react'

type sectionProps ={
    title?:string,
    children: ReactNode
}
const Section = ({title="My Section", children}:sectionProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
  )
}

export default Section