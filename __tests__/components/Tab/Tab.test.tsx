import React, { render, screen, fireEvent } from '@testing-library/react'
import Tab from '@/components/Tab';

describe('Tab Compoent', () => {
  it('Title should be displayed with All and My Faves values', () => {

    const headerTabs = ["All", "My Faves"];
    const panelTabs = [<div key={1}>My First tab</div>, <div key={2}>My Second Tab</div>];

    render(<Tab headerTabs={headerTabs} panelTabs={panelTabs}  />)
    const headerAll = screen.getByText('All');
    const headerMyFaves = screen.getByText('My Faves');
    expect(headerAll).toBeInTheDocument();
    expect(headerMyFaves).toBeInTheDocument();
  })

  it('Header is active on click', () => {
    const headerTabs = ["All", "My Faves"];
    const panelTabs = [<div key={1}>My First tab</div>, <div key={2}>My Second Tab</div>];

    render(<Tab headerTabs={headerTabs} panelTabs={panelTabs} />);
    const headerMyFaves = screen.getByText('My Faves');
    fireEvent.click(headerMyFaves);
    expect(screen.getByText('My Faves')).toBeVisible();
  })
})
