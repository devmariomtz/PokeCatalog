import React from 'react'
import Box from '@mui/material/Box';
import {Skeleton} from "@mui/material";




//TODO: use hooks to manage the request load, example: use useAsync and a var loading to know if the request still loading (for future versions)
const SkeletonGrid = () => {

    return (
        <Box sx={{width: 300}}>
            <Skeleton animation="wave" sx={{bgcolor: 'lightgray'}}/>
            <Skeleton animation="wave" sx={{bgcolor: 'lightgray'}}/>
            <Skeleton animation="wave" sx={{bgcolor: 'lightgray'}}/>
        </Box>);
}
export default SkeletonGrid
