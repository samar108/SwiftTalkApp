import { useContext ,useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box , styled} from "@mui/material";
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";

import InfoDrawer from "../../drawer/Drawer"

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img') ({
    height: 45,
    width: 45,
    borderRadius: '50%'
})

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;



const Header = () =>{


	const [openDrawer , setOpenDrawer] = useState(false);
	const {account} = useContext(AccountContext);

	const toggleDrawer = () => {
		 setOpenDrawer(true);
	}
	return (

		<>
		<Component>
			<Image src = {account.picture} alt="dp"  onClick ={() => toggleDrawer()}/>
			<Wrapper>
                    <MessageIcon />
                    <HeaderMenu/>
                </Wrapper>

		</Component>
		<InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
		</>
	)
}

export default Header;