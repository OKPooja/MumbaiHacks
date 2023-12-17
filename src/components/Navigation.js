import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        
        <nav>
            {/* <div className='nav__brand'>
                
            </div> */}
            <ul >
                <li id= "digital"><a href="#Digital">Digital Payment</a></li>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Pricing">Pricing</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
           
            {account ? (
            <button type="button" className="connect_button">
            {account.slice(0, 6) + '...' + account.slice(38, 42)}
            </button>
            ) : (
            <button type="button" className="connect_button" Click={connectHandler}>
            Connect
            </button>
            )}
                

            {/* <input
                type="text"
                className="nav__search"
            /> */}

            {/* {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )} */}

            {/* <ul className='nav__links'>
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul> */}
        </nav>
    );
}

export default Navigation;