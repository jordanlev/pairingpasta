# Pairing Pasta

Source code for [https://pairingpasta.xyz](https://pairingpasta.xyz)

A small web app for randomly assigning a list of people to programming pairs, while avoiding repeats as much as possible.

This app runs entirely in the browser -- no data is sent to a server.

This app was written as a learning project to get familiar with the Svelte JS framework. It is likely not idiomatic svelte code (and definitely not optimized, as the primary data store is 1 big array that probably causes the entire component tree to update every time any single piece of data is changed).
