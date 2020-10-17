import React from 'react';
import {Grid, List, ListItem, ListItemText, Divider} from '@material-ui/core';

function Listagem() {
    return (
        <>
            <div>
                <form>
                    <Grid container direction="collumn" spacing={1}>
                        <Divider />
                        <Grid item xs={12}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem>
                                    <ListItemText primary="Inbox" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Inbox" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    );
}

export default Listagem;

