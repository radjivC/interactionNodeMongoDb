Interaction MongoDB (2.2) with Node.js
======================================

This some interaction example how to use mongoDb with Nodejs.

Every files can work independant.

Don't forget to install the package:



What is MongoDB?
================

Written in: C++

Main point: Retains some friendly properties of SQL. (Query, index)

License: AGPL (Drivers: Apache)

Protocol: Custom, binary (BSON)

Master/slave replication (auto failover with replica sets)
Sharding built-in
Queries are javascript expressions

Run arbitrary javascript functions server-side
Better update-in-place than CouchDB
Uses memory mapped files for data storage
Performance over features
Journaling (with --journal) is best turned on
On 32bit systems, limited to ~2.5Gb
An empty database takes up 192Mb
GridFS to store big data + metadata (not actually an FS)
Has geospatial indexing
Data center aware

Best used: If you need dynamic queries. If you prefer to define indexes, not map/reduce functions. If you need good performance on a big DB. If you wanted CouchDB, but your data changes too much, filling up disks.

For example: For most things that you would do with MySQL or PostgreSQL, but having predefined columns really holds you back.
