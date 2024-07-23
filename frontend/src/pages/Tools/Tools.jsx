import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ToolsCategory from '../../Components/ToolsCategory/ToolsCategory';
import AllTools from '../../Components/AllTools/AllTools';
import './Tools.css';

const Tools = () => {
    const location = useLocation();
    const [toolsCategory, setToolsCategory] = useState('');

    useEffect(() => {
        if (location.state && location.state.category) {
            setToolsCategory(location.state.category);
        }
    }, [location]);

    return (
        <div>
            <ToolsCategory toolsCategory={toolsCategory} setToolsCategory={setToolsCategory} />
            <AllTools toolsCategory={toolsCategory}/>
        </div>
    );
};

export default Tools;
