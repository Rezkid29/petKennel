#!/bin/bash

# Docker Test Script for Pet Kennel Manager
# This script tests both development and production Docker setups

echo "🐾 Pet Kennel Manager - Docker Test Script"
echo "=========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed!"
    echo "Please install Docker Desktop from https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    echo "❌ Docker daemon is not running!"
    echo "Please start Docker Desktop and try again."
    exit 1
fi

echo "✅ Docker is installed and running"
echo ""

# Test 1: Build development image
echo "📦 Building development image..."
if docker build -t petkennel:dev --target development . --quiet; then
    echo "✅ Development image built successfully"
else
    echo "❌ Failed to build development image"
    exit 1
fi
echo ""

# Test 2: Build production image
echo "📦 Building production image..."
if docker build -t petkennel:prod --target production . --quiet; then
    echo "✅ Production image built successfully"
else
    echo "❌ Failed to build production image"
    exit 1
fi
echo ""

# Test 3: Verify images exist
echo "🔍 Checking Docker images..."
docker images | grep petkennel
echo ""

# Test 4: Test docker-compose syntax
echo "🔍 Validating docker-compose.yml..."
if docker-compose config &> /dev/null; then
    echo "✅ docker-compose.yml is valid"
else
    echo "❌ docker-compose.yml has errors"
    exit 1
fi
echo ""

echo "=========================================="
echo "✨ All Docker tests passed!"
echo ""
echo "To start the app:"
echo "  Development: docker-compose up dev"
echo "  Production:  docker-compose up prod"
echo ""
echo "See DOCKER.md for complete documentation"
