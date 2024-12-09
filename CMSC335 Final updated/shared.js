import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import Suspect from './Suspect.js';
import { fetchAllPages } from './fetchPages.js';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

export {fs, path, express, Suspect, fetchAllPages, fileURLToPath, dotenv, MongoClient, ServerApiVersion };