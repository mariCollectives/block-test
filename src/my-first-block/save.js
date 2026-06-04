import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
export default function save({ attributes }) {
    const {
        title,
        subtitle,
        backgroundColor,
        fontColor,
        showButton
    } = attributes;

    return (
        <div style={{ backgroundColor, color: fontColor }}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            {showButton && (
                <button>Learn More</button>
            )}
        </div>
    );
}