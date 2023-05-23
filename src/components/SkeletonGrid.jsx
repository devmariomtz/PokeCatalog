import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
    const SkeletonGrid = () => {
        return (
            <SkeletonTheme baseColor="#75677a" highlightColor="#444">
                <p>
                    <Skeleton count={7} />
                </p>
            </SkeletonTheme>
        );
    }
export default SkeletonGrid
