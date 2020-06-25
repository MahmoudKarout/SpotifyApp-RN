import React from 'react';
import StarRating from 'react-native-star-rating';

export default StarRatings = ({ RatedStarColor, emptyStarColor, rating }) => {
    return (

        <StarRating
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            disabled={true}
            maxStars={5}
            rating={rating * 0.05}
            starSize={15}
            emptyStarColor={emptyStarColor}
            fullStarColor={RatedStarColor}
            containerStyle={{
                width: "50%"
            }}
        />
    );
}



