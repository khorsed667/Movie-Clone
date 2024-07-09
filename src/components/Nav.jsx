import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-amber-100 text-lg font-medium flex gap-4 p-2 justify-center'>
            <NavItem tittle={'Trending'} param={'fetchTrending'}></NavItem>
            <NavItem tittle={'Top Rated'} param={'fetchTopRated'}></NavItem>
        </div>
    );
};

export default Nav;