import './Navbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppsIcon from '@mui/icons-material/Apps';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


function Navbar() {
    return (
        <div className="navbar">
            <p className="heading">Material Kit React</p>
            <ul className='list'>
                <AppsIcon />
                <li className='listItem'>Components</li>
                <CollectionsBookmarkIcon />
                <li className='listItem'>Upadate to pro</li>
                <CloudDownloadIcon />
                <li className='listItem'>Download</li>
                <TwitterIcon className='icon1'/>
                <FacebookIcon  className='icon1'/>
                <InstagramIcon className='icon1'/>
            </ul>
        </div>
    )
}
export default Navbar;