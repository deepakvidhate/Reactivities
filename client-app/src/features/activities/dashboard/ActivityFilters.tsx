import React from 'react';
import { Header, Menu } from 'semantic-ui-react'
import Calendar from 'react-calendar';

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical slze='large' style={{ width: '100%', marginTop: 25 }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content="I'm Going" />
                <Menu.Item content="I'm Hosting" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}