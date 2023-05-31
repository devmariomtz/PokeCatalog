import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//TODO: use hooks to manage the request load, example: use useAsync and a var loading to know if the request still loading (for future versions)
const SkeletonGrid = () => {
    return (
        <SkeletonTheme baseColor="#75677a" highlightColor="#444">
            <p>
                <Skeleton count={7}/>
            </p>
        </SkeletonTheme>
    );
}
export default SkeletonGrid
