import React from 'react';

import ContentLoader, { Rect, Circle } from "react-content-loader/native";

export default PostLoader = ({ post }) => {

    return (
        <ContentLoader>
            <Circle cx="36" cy="33" r="15" />
            <Rect x="84" y="16" rx="3" ry="3" width="200" height="15" />
            <Rect x="85" y="36" rx="3" ry="3" width="100" height="15" />
            <Rect x="84" y="75" rx="3" ry="3" width="250" height="150" />
        </ContentLoader>
    );
}