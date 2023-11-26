import React from 'react';
import TestRenderer, { act }  from 'react-test-renderer';

import ProfileStatus from './ProfileStatus';

// import from 'react-dom/test-utils';

describe('ProfileStatus Component', () => {
  test('status from props should be in the state', () => {
    let component;
    act(() =>{
        component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />)
    }) 
    
  
    expect(component.root.props.status).toBe("it-kamasutra.com");
  });

  test('span in ProfileStatus should be displayed', () => {
    let component;
    act(() =>{
        component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />)
    }) 
    const spanElement = component.root.findByType('span');
    expect(spanElement).toBeDefined();
    
  });

  test('span in ProfileStatus should be have correct text', () => {
    let component;
    act(() =>{
        component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />)
    }) 
    const spanElement = component.root.findByType('span');
    expect(spanElement.props.children).toBe("it-kamasutra.com");
    
  });

  test('input in ProfileStatus should be null', () => {
    let component;
    
        component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />)
    
    const inputElement = component.root.findAllByType('input');
    expect(inputElement).toBeUndefined;
    
  });

  test('input in ProfileStatus should be', () => {
    let component;
    act(() =>{
        component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />)
    }) 
    const spanElement = component.root.findByType('span');
    act(() => {
        spanElement.props.onDoubleClick();
      });
    const inputElement = component.root.findAllByType('input');
    expect(inputElement).toBeDefined();
    
  });

  


});