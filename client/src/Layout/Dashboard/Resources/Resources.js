import React from 'react';
import BoxList from '../../BoxList/BoxList';
import NewResource from '../../../Containers/Create/NewResource/NewResource';
// CONSIDER RENAMING TO DASHBOARDCONTENT
const resources = props => {
    // @TODO Is there a way to do this passing over the array only once?
    // const ownedResources = props.userResources.filter(resource => (
    //   resource.creator === props.userId
    // ))
    // const enrolledResources = props.userResources.filter(resource => (
    //   resource.creator !== props.userId
    // ))

    let linkPath =`/myVMT/${props.resource}/`
    let linkSuffix = props.resource === 'courses' ? '/activities' : '/summary';
    if (props.resource === 'courses') {
      linkSuffix = '/activities'
    } else if (props.resource === 'activities') {
      linkSuffix = '/details'
    } else {linkSuffix = '/summary'}
    const displayResource = props.resource[0].toUpperCase() + props.resource.slice(1);
    if (props.parentResource === 'courses') {
      linkPath = `/myVMT/${props.parentResource}/${props.parentResourceId}/${props.resource}/`
      linkSuffix = '/details'
    }
    return (
      <div>
        {/* @TODO don't show create optinos for students */}
        {props.parentResource !== 'activities' ? <NewResource resource={props.resource} courseId={props.parentResource === 'course'?  props.parentResourceId : null}/> : null}
        <h2>My {displayResource}</h2>
        <BoxList
          list={props.userResources}
          linkPath={linkPath}
          linkSuffix={linkSuffix}
          notifications = {props.notifications}
          resource = {props.resource}
          listType = 'private'
          // draggable
        />
      </div>
    )
  }

export default resources;
