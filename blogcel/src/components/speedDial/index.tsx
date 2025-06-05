'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { SpeedDialProps, Tooltip } from '@mui/material';

const actions = [
  { icon: <FileCopyIcon />, name: 'WhatsApp' },
  { icon: <SaveIcon />, name: 'Produtos' },
  { icon: <PrintIcon />, name: 'Por que WhatsApp?' },
  { icon: <ShareIcon />, name: 'Estamos em reconstrução' },
  { icon: <ShareIcon />, name: 'Onde atuamos? (Por enquanto)' },
];

export default function DraggableSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const [direction, setDirection] = React.useState<SpeedDialProps['direction']>('down');
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const initialX = window.innerWidth - 72;
    const initialY = window.innerHeight - 72;
    setPosition({ x: initialX, y: initialY });
    updateDirection(initialX, initialY);

    const onResize = () => {
      const newX = window.innerWidth - 72;
      const newY = window.innerHeight - 72;
      setPosition({ x: newX, y: newY });
      updateDirection(newX, newY);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const [tooltipPlacement, setTooltipPlacement] = React.useState<'left' | 'right'>('left');


  const updateDirection = (x: number, y: number) => {
    const margin = 100;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
  
    const isNearLeft = x < margin;
    const isNearRight = x > vw - margin;
    const isNearTop = y < margin;
    const isNearBottom = y > vh - margin;
  
    if (isNearTop) {
      setDirection('down');
    } else if (isNearBottom) {
      setDirection('up');
    } else {
      setDirection('up');
    }
  
    if (isNearLeft) {
      setTooltipPlacement('right');
    } else if (isNearRight) {
      setTooltipPlacement('left');
    }
  };
  
  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9995,
      }}
    >
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={containerRef}
        dragElastic={0.2}
        onDrag={(_, info) => {
          setPosition({ x: info.point.x, y: info.point.y });
          updateDirection(info.point.x, info.point.y);
        }}
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 9996,
          pointerEvents: 'auto',
          touchAction: 'none',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 330,
            transform: 'translateZ(0px)',
            flexGrow: 1,
          }}
        >
          <SpeedDial
  ariaLabel="SpeedDial tooltip"
  icon={<SpeedDialIcon />}
  open={open}
  onClick={() => setOpen(prev => !prev)}
  direction={direction}
  sx={{ zIndex: 9996 }}
  
>
           {actions.map((action) => (
    <SpeedDialAction
    key={action.name}
    icon={action.icon}
    tooltipTitle={
      <span style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 200,
        display: 'inline-block',
      }}>
        {action.name}
      </span>
    }
    tooltipOpen
    tooltipPlacement={tooltipPlacement}
    onClick={() => setOpen(false)}
  />
  ))}
</SpeedDial>


{/* <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={
       
      }
      tooltipOpen
      onClick={() => setOpen(false)}
    />
  ))}
</SpeedDial> */}




        </Box>
      </motion.div>
    </div>
  );
}
