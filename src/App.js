import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Route';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout;
                        if (!Layout) Layout = Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {' '}
                                        <Page />{' '}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
