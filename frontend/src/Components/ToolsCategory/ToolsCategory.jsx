import React from 'react';
import './ToolsCategory.css';

const ToolsCategory = ({ toolsCategory, setToolsCategory }) => {
    const categories = {
        download: 'Download',
        emi: 'EMI',
        unitConverter: 'Unit Converter',
        currencyConverter: 'Currency Converter',
        homeloan:'Home Loan'
    };

    return (
        <div>
            <section className="container">
                <div className="all_category ">
                    {Object.keys(categories).map((key) => (
                        <div
                            key={key}
                            onClick={() => setToolsCategory(categories[key])}
                            className={`${toolsCategory === categories[key] ? 'active' : ''} all_category_box all_tools_category`}
                        >
                            <p>{categories[key]}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ToolsCategory;
