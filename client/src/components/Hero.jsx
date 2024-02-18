import {Container , Card , Button} from 'react-bootstrap'

const Hero = () => {
  return (
    <div className='py-5'>
        <Container  className='d-flex justify-contain-center'>
            <Card className='p-5 d-flex flex-column hero-card bg-light w-75'>
                <h1 className='text-center mb-4'>MERN Authentication</h1>
                <p className='text-center mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas soluta nam quibusdam doloremque nostrum quia eos ipsam animi fugit, dolorem deserunt non rerum minima nihil amet reiciendis molestiae. Quod!
                </p>
                <div className="d-flex justify-contain-center">
                    <Button href='/login' variant='primary' className='me-3'>Login</Button>
                    <Button href='/register' variant='secondary'>Register</Button>
                </div>
            </Card>
        </Container>
    </div>
  )
}

export default Hero