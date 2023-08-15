import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Blogs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Difference between Node.js and JavaScript</Tab>
                <Tab>when should use NodeJS and mongoDB</Tab>
                <Tab>Difference between SQL and NoSQL</Tab>
            </TabList>

            <TabPanel>
                <div className="hero overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>JavaScript</th>

                                <th>Node.js</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>	Javascript is a programming  <br /> language that is used for writing  <br /> scripts on the website.</td>
                                <td>NodeJS is a Javascript runtime  <br /> environment.</td>

                            </tr>
                            <tr className="hover">
                                <th>2</th>
                                <td>Javascript can only be run in the  <br /> browsers.</td>
                                <td> browsers.	We can run Javascript outside the  <br /> browser with the help of NodeJS.</td>

                            </tr>
                            <tr>
                                <th>3</th>
                                <td>	It is basically used on the client- <br />side.</td>
                                <td>It is mostly used on the server-side.</td>

                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Javascript is capable enough to add HTML <br /> and play with the DOM.</td>
                                <td>Nodejs does not have capability to <br /> add HTML tags.</td>

                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Javascript can run in any browser <br /> engine as like JS core in safari and <br /> Spidermonkey in Firefox.</td>
                                <td>V8 is the Javascript engine inside of <br /> node.js that parses and runs <br /> Javascript. </td>

                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Javascript is used in frontend <br /> development.</td>
                                <td>Nodejs is used in server-side <br /> development.</td>

                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Some of the javascript frameworks <br /> are RamdaJS, TypedJS, etc. </td>
                                <td>Some of the Nodejs modules are <br /> Lodash, express etc. These modules <br /> are to be imported from npm. </td>

                            </tr>
                            <tr>
                                <th>8</th>
                                <td>It is the upgraded version of ECMA <br /> script that uses Chrome V8 engine <br /> written in C++.</td>
                                <td>Nodejs is written in C, C++ and <br /> Javascript.</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </TabPanel>
            <TabPanel>
                <h1 className='text-center text-2xl font-bold my-4'>when should use NodeJS and mongoDB</h1>
                <h2 className='text-xl m-10 collapse p-14'>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

                    MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...

                    These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.</h2>

                <div className="hero overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>When should we use Nodejs?</th>
                                <th></th>
                                <th>JobWhen should we use MongoDB?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        Any project needs a programming environment <br />
                                        and a runtime library that offers you basic<br />
                                        programming tools/support and can compile<br />
                                        and/or interpret your code. Nodejs is such<br />
                                        as tool for the Javascript programming language.<br />
                                        There are other similar tools for other<br />
                                        languages such as Python, Java, PHP, C#,<br />
                                        C++, Go, etc...<br />

                                        So, if you want to write some kind of stand-<br />
                                        alone program or server in Javascript, then<br />
                                        you can use nodejs for it.
                                    </h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3 className='mt-5'>
                                        If your application needs the ability to<br />
                                        persistently store data in a way that you<br />
                                        can efficiently query or update it later,<br />
                                        then you would typically use some form of<br />
                                        database. There are dozens of popular<br />
                                        databases. MongoDB is one such database.<br />
                                        MariaDB, MySql, CouchDB, DynamoDB on AWS,<br />
                                        Postgres are examples of other databases.<br />
                                        Different databases have different<br />
                                        strengths things they are best at and<br />
                                        different ways of using them so it's a<br />
                                        whole different question to choose the<br />
                                        right/best database for what you're<br />
                                        doing.
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TabPanel>
            <TabPanel>
                <h1 className='text-center text-2xl font-bold my-4'>Difference between SQL and NoSQL</h1>
                <h2 className='text-xl m-10 collapse p-14'>SQL databases are primarily called Relational Databases (RDBMS); whereas NoSQL databases are primarily called non-relational or distributed databases. </h2>

                <div className="hero overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SQL</th>
                                <th></th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4> RELATIONAL DATABASE <br /> MANAGEMENT SYSTEM (RDBMS) </h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>Non-relational or distributed database <br /> system.
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>These databases have fixed or static or <br /> predefined schema</h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>They have a dynamic schema <br /> system.
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>These databases are not suited for <br /> hierarchical data storage.</h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>These databases are best suited for <br /> hierarchical data storage..
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>These databases are best suited for <br /> complex queries</h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>These databases are not so good for <br /> complex queries
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Vertically Scalable</h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>	Horizontally scalable
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Follows ACID property</h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>Follows CAP(consistency, availability,<br /> partition tolerance)
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Examples: MySQL, PostgreSQL, <br /> Oracle, MS-SQL Server, etc</h4>
                                </td>
                                <td></td>
                                <td>
                                    <h3>Examples: MongoDB, GraphQL, HBase, <br /> Neo4j, Cassandra, etc
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TabPanel>
            <TabPanel>
                <h1 className='text-center text-2xl font-bold my-4'>JSON Web Token</h1>
                <h2 className='text-xl m-10 collapse p-14'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims.</h2>

                <div className="hero overflow-x-auto">
                    <table className="table">
                        <thead> <tr> <th>JSON Web Token Work</th></tr> </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4 className='m-10 px-7 collapse-arrow'> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                                        Once decoded, you will get two JSON strings:

                                        The header and the payload.
                                        The signature.
                                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </h4>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Blogs;