import SvgVerified from "../SvgVerified"
import "./index.css"

interface CardProps {
  title: string
}

function Card({ title }: CardProps) {
  return (
  <div className='cards'>
    <div className='icon'>
    <SvgVerified />
    </div>
  <span>{title}</span>
</div>)
}

export default Card