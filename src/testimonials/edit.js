import './editor.scss';
import { InspectorControls, RichText, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from '@wordpress/element';
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { useSelect } from '@wordpress/data';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default function edit ({ attributes, setAttributes }) {

  function test({ attributes, isSelected }) {
    const { mediaId } = attributes;
   
    /*const postType = useSelect(
      ( select ) => select( 'core/editor' ).getCurrentPostType(), []
    );*/
  }

  function updateQuote(passedValue) {
    setAttributes({quote: passedValue})
  }

  function updateAttribution(passedValue) {
    setAttributes({attribution: passedValue})
  }

  return (
    <Fragment>

        <div className="cardContainer">
          <div className="imageContainer">
            <img src={attributes.imageUrl}/>
          </div>

          {/*Description Container*/}
          <div className="descriptionContainer">
            <RichText value={attributes.quote} tagName="h1" onChange={updateQuote}/>
            <RichText value={attributes.attribution} tagName="h2" onChange={updateAttribution}/>
          </div>
          
        </div>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) =>
              setAttributes( { mediaId: media.id, imageUrl: media.url } )
						}
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						value={ attributes.mediaId }
						render={ ( { open } ) => (
							<Button variant="primary" onClick={ open }>Select Image</Button>
						) }
					/>
        </MediaUploadCheck>

      <InspectorControls>

        <PanelBody title="Text" initialOpen={true}>
          
          {/*Quote Control*/}
          <TextControl 
          label="Quote" 
          value={attributes.quote}
          onChange={updateQuote} />

          {/*Attribution Control*/}
          <TextControl 
          label="Attribution" 
          value={attributes.attribution}
          onChange={updateAttribution} />
          
				</PanelBody>

			</InspectorControls>

    </Fragment>
  )
}