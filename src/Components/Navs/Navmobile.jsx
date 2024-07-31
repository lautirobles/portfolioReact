import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import * as Icon from 'react-bootstrap-icons'


const Navmobile = ()=>{


    return(
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<Icon.MenuApp />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<Icon.AlarmFill/>} command='⌘T'>
                New Tab
                </MenuItem>
                <MenuItem icon={<Icon.AlarmFill/>} command='⌘N'>
                New Window
                </MenuItem>
                <MenuItem icon={<Icon.AlarmFill/>} command='⌘⇧N'>
                Open Closed Tab
                </MenuItem>
                <MenuItem icon={<Icon.AlarmFill/>} command='⌘O'>
                Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    )}

    export default Navmobile