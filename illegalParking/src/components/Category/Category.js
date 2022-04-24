import React from "react";

import Icons from "../../assets/images/Icons";

import "./Category.scss";

const CategoryItem = ({ icon }) => {
    return (
        <div className="category-item">
            <div className="category-button">
                <Icons>{icon}</Icons>
            </div>
        </div>
    );
};

const Category = ({ setType }) => {
    const category = [
        {
            id: 1,
            icon: "home",
        },
        {
            id: 2,
            icon: "cctv",
        },
        {
            id: 3,
            icon: "children",
        },
        {
            id: 4,
            icon: "parking",
        },
    ];
    return (
        <div className="category-container">
            <ul className="category">
                {category.map(({ id, icon }) => (
                    <li
                        key={id}
                        className="category-item"
                        onClick={() => {
                            setType(id);
                        }}
                    >
                        <CategoryItem icon={icon}></CategoryItem>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
