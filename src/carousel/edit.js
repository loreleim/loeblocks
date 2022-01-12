import './editor.scss';
import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from '@wordpress/element';
import { PanelBody, TextControl, ButtonGroup, Button } from "@wordpress/components";

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default function edit ({ attributes, setAttributes }) {

  function updateHeaderAttribute(passedValue) {
    setAttributes({header: passedValue})
  }

  function updateSelectedMedia(passedValue) {
    setAttributes({mediaId: passedValue})
  }

  function updateImageUrl(passedValue) {
    setAttributes({imageUrl: passedValue})
  }

  return (
    <Fragment>

        <div className="cardContainer">
          <img src={attributes.imageUrl}/>
        </div>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) =>
              setAttributes( { mediaId: media.id, imageUrl: media.url } )
						}
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						value={ attributes.mediaId }
						render={ ( { open } ) => (
							<Button onClick={ open }>Open Media Library</Button>
						) }
					/>
				</MediaUploadCheck>

      <InspectorControls>

        {/*Text Control*/}
        <PanelBody title="Text" initialOpen={true}>
          <TextControl 
          label="Header" 
          value={attributes.header}
          onChange={updateHeaderAttribute} />
				</PanelBody>

        {/*ButtonGroup*/}
        <PanelBody title="Button Group" initialOpen={true}>
          <ButtonGroup>
            <Button variant="primary">25%</Button>
            <Button variant="primary">50%</Button>
            <Button variant="primary">75%</Button>
            <Button variant="primary">100%</Button>
          </ButtonGroup>
				</PanelBody>

			</InspectorControls>

    </Fragment>
  )
}