import './Display.css';
import './guy.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CameraIcon from '@mui/icons-material/Camera';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Display() {
    return (
        <div className="main-div" >
            <div className='img-div' />
            <h1 className='name'>Christian Loboutin</h1>
            <p className='design'>DESIGNER</p>
            <div className='iconDiv'>
                <TwitterIcon className='icon' />
                <FacebookIcon className='icon' />
                <InstagramIcon className='icon' />
            </div>
            <div className='para'>
                An artist of considerable range,chet Faker- the name taken by Melbourne-raised,Brooklyn-based Nick Murphy-writes, perform and record all of his own music,givin it a warm,intimate feel with a solid groove structure.
            </div>
            <footer className='footer'>
                <div className='f-div'>
                    <CameraIcon className=' f-icon' style={{ fontSize: '2rem' }} />
                    <p className='f-para'>Studio</p>
                </div>
                <div className='f-div'>
                    <ColorLensIcon className='f-icon' style={{ fontSize: '2rem' }} />
                    <p className='f-para'>Work</p>
                </div>
                <div className='f-div'>
                    <FavoriteIcon className='f-icon' style={{ fontSize: '2rem' }} />
                    <p className='f-para'>Favorite</p>
                </div>
            </footer>
        </div>
    )
}

export default Display;