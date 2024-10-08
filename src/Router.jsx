import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Coins from './routes/Coins'
import Coin from './routes/Coin'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Coins/>
        </Route>

        <Route path="/:coinId">
          <Coin/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
