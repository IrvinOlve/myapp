import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ButtonStyle';

const getStyles = ({
    size,
    theme,
    outline,
    disabled,
}) => {
    const containerStyles = [styles.containerDefault];
    const textStyles = [styles.textDefault];

    if (size === 'large') {
        containerStyles.push(styles.containerLarge);
        textStyles.push(styles.textLarge);
    } else if (size === 'small') {
        containerStyles.push(styles.containerSmall);
        textStyles.push(styles.textSmall);
    }

    if (theme === 'secondary') {
        containerStyles.push(styles.containerSecondary);
        textStyles.push(styles.textSecondary);

        if (outline) {
            containerStyles.push(styles.containerSecondaryOutline);
            textStyles.push(styles.textSecondaryOutline);
        }
    } else {
        containerStyles.push(styles.containerPrimary);
        textStyles.push(styles.textPrimary);

        if (outline) {
            containerStyles.push(styles.containerPrimaryOutline);
            textStyles.push(styles.textPrimaryOutline);
        }
    }

    if (disabled) {
        containerStyles.push(styles.containerDisabled);
        textStyles.push(styles.textDisabled);
    }

    return { textStyles, containerStyles };
};

class StyleButton extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        size: PropTypes.oneOf(['small', 'default', 'large']),
        theme: PropTypes.oneOf(['primary', 'secondary']),
        outline: PropTypes.bool,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        size: 'default',
        theme: 'primary',
        outline: false,
        disabled: false,
    };

    render() {
        const {
            onPress,
            text,
            disabled,
            ...rest
        } = this.props;
        const { textStyles, containerStyles } = getStyles({ disabled, ...rest });

        return (
            <TouchableOpacity onPress={onPress} style={containerStyles} disabled={disabled}>
                <Text style={textStyles}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

export default StyleButton;