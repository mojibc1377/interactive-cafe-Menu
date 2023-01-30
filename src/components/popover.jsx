import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as MdIcons from 'react-icons/md'
export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <Button className='button--info' aria-describedby={id} variant="text" color='warning' onClick={handleClick}><MdIcons.MdMoreHoriz/></Button>
        
        <Popover className='popUp'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>{props.description}</Typography>
      </Popover>
    </div>
  );
}