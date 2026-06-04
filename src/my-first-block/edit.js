import { __ } from '@wordpress/i18n';
import './editor.scss';


import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody,
    TextControl,
    ToggleControl
} from '@wordpress/components';



export default function Edit({ attributes, setAttributes }) {
	const { title, subtitle, backgroundColor, fontColor, showButton } = attributes;

	return (
		<>
    <InspectorControls>
        <PanelBody title="Hero Settings">

			<TextControl
				label="Title"
				value={title}
				onChange={(value) =>
					setAttributes({
						title: value,
					})
				}
			/>
			 <TextControl
                label="Subtitle"
                value={subtitle}
                onChange={(value) =>
                    setAttributes({
                        subtitle: value
                    })
                }
            />


            <TextControl
                label="Background Color"
                value={backgroundColor}
                onChange={(value) =>
                    setAttributes({
                        backgroundColor: value
                    })
                }
            />

			<TextControl
                label="font Color"
                value={fontColor}
                onChange={(value) =>
                    setAttributes({
                        fontColor: value
                    })
                }
            />

            <ToggleControl
                label="Show Button"
                checked={showButton}
                onChange={(value) =>
                    setAttributes({
                        showButton: value
                    })
                }
            />

        </PanelBody>
    </InspectorControls>

    <div
        {...useBlockProps()}
        style={{
            backgroundColor
        }}
    >
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        {showButton && (
            <button>Learn More</button>
        )}
    </div>
</>	
	);
}