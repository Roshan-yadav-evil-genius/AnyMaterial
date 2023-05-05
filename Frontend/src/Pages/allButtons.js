import React from 'react'
import { Button } from '../Atoms/Buttons'

const AllButtons = () => {
  return (
    <div>
      <h1>All Buttons</h1>
      <div className="listbtns">
        <Button size="sm" shape="rectangular">Buy Now</Button>
        <Button size="md" >Buy Now</Button>
        <Button size="lg" >Buy Now</Button>
        <Button size="sm" variant="success" shape="rectangular">Buy Now</Button>
        <Button size="md" variant="success" >Buy Now</Button>
        <Button size="lg" variant="success" >Buy Now</Button>
        <Button size="sm" variant="danger" shape="rectangular">Buy Now</Button>
        <Button size="md" variant="danger" >Buy Now</Button>
        <Button size="lg" variant="danger" >Buy Now</Button>
        <Button size="sm" variant="warning" shape="rectangular">Buy Now</Button>
        <Button size="md" variant="warning" >Buy Now</Button>
        <Button size="lg" variant="warning" >Buy Now</Button>
        <Button size="sm" variant="info" shape="rectangular">Buy Now</Button>
        <Button size="md" variant="info" >Buy Now</Button>
        <Button size="lg" variant="info" >Buy Now</Button>
        <Button size="sm" variant="dark" shape="rectangular" >Buy Now</Button>
        <Button size="md" variant="dark" >Buy Now</Button>
        <Button size="lg" variant="dark" >Buy Now</Button>
        <Button disabled>Buy Now</Button>
      </div>
    </div>
  )
}

export default AllButtons