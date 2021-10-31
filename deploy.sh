#!/bin/bash

yarn run build

scp -r ./build root@top.wsmpage.cn:/opt/wsm