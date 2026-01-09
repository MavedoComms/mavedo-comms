import { describe, it, expect } from 'vitest'
import firebaseConfig from '../../firebase.json'

/**
 * Feature: admin-cms-fix, Property 1: Firebase hosting routes requests correctly
 * 
 * This test validates that Firebase hosting configuration properly routes:
 * - /admin/* paths to static admin files
 * - All other paths to the SPA index.html
 */
describe('Firebase Routing Configuration', () => {
  it('should have correct rewrite rules for admin routes', () => {
    const { hosting } = firebaseConfig
    
    // Verify hosting configuration exists
    expect(hosting).toBeDefined()
    expect(hosting.public).toBe('dist')
    
    // Verify rewrite rules
    expect(hosting.rewrites).toBeDefined()
    expect(hosting.rewrites).toHaveLength(1)
    
    // The rewrite rule should exclude admin routes from SPA routing
    const rewriteRule = hosting.rewrites[0]
    expect(rewriteRule.source).toBe('!/admin/**')
    expect(rewriteRule.destination).toBe('/index.html')
  })

  it('should have appropriate headers for admin routes', () => {
    const { hosting } = firebaseConfig
    
    // Verify headers configuration exists
    expect(hosting.headers).toBeDefined()
    expect(hosting.headers).toHaveLength(1)
    
    // Verify admin route headers
    const adminHeaders = hosting.headers[0]
    expect(adminHeaders.source).toBe('/admin/**')
    expect(adminHeaders.headers).toBeDefined()
    expect(adminHeaders.headers).toHaveLength(1)
    
    // Verify cache control header
    const cacheHeader = adminHeaders.headers[0]
    expect(cacheHeader.key).toBe('Cache-Control')
    expect(cacheHeader.value).toBe('no-cache, no-store, must-revalidate')
  })

  it('should serve static files from dist directory', () => {
    const { hosting } = firebaseConfig
    
    // Verify public directory is set to dist
    expect(hosting.public).toBe('dist')
    
    // Verify ignore patterns don't interfere with admin files
    expect(hosting.ignore).toEqual([
      'firebase.json',
      '**/.*',
      '**/node_modules/**'
    ])
  })
})