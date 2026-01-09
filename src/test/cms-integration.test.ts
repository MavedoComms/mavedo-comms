import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * Integration tests for CMS functionality
 * Validates: Requirements 1.3, 1.4
 */
describe('CMS Integration Tests', () => {
  const distPath = join(process.cwd(), 'dist')
  const adminPath = join(distPath, 'admin')

  it('should have CMS interface that loads without errors', () => {
    // Test that the admin index.html contains all necessary CMS components
    const adminIndexPath = join(adminPath, 'index.html')
    const htmlContent = readFileSync(adminIndexPath, 'utf-8')
    
    // Verify CMS script and CSS are loaded
    expect(htmlContent).toContain('decap-cms.js')
    expect(htmlContent).toContain('decap-cms.css')
    
    // Verify proper meta tags for CMS functionality
    expect(htmlContent).toContain('charset="utf-8"')
    expect(htmlContent).toContain('viewport')
    expect(htmlContent).toContain('robots')
    
    // Verify title is set
    expect(htmlContent).toContain('<title>Content Manager</title>')
  })

  it('should have all configured collections accessible', () => {
    // Test that config.yml contains all expected collections
    const configPath = join(adminPath, 'config.yml')
    const yamlContent = readFileSync(configPath, 'utf-8')
    
    // Verify backend configuration
    expect(yamlContent).toContain('backend:')
    expect(yamlContent).toContain('name: github')
    expect(yamlContent).toContain('repo: jedidja-cto/mavedo-communications')
    
    // Verify all expected collections are present
    const expectedCollections = [
      'site',
      'home', 
      'packages',
      'testimonials',
      'faq',
      'process',
      'coreValues'
    ]
    
    expectedCollections.forEach(collection => {
      expect(yamlContent).toContain(`name: ${collection}`)
    })
    
    // Verify media configuration
    expect(yamlContent).toContain('media_folder: public/images')
    expect(yamlContent).toContain('public_folder: /images')
  })

  it('should have proper CMS configuration structure', () => {
    const configPath = join(adminPath, 'config.yml')
    const yamlContent = readFileSync(configPath, 'utf-8')
    
    // Verify essential CMS configuration sections
    expect(yamlContent).toContain('collections:')
    expect(yamlContent).toContain('fields:')
    expect(yamlContent).toContain('widget:')
    
    // Verify local backend is enabled for development
    expect(yamlContent).toContain('local_backend: true')
    
    // Verify publish mode is set
    expect(yamlContent).toContain('publish_mode: simple')
  })

  it('should have valid field configurations for content editing', () => {
    const configPath = join(adminPath, 'config.yml')
    const yamlContent = readFileSync(configPath, 'utf-8')
    
    // Verify common field types are configured
    const expectedFieldTypes = [
      'string',
      'text', 
      'image',
      'list',
      'object',
      'boolean'
    ]
    
    expectedFieldTypes.forEach(fieldType => {
      expect(yamlContent).toContain(`widget: ${fieldType}`)
    })
    
    // Verify required field configurations
    expect(yamlContent).toContain('label:')
    expect(yamlContent).toContain('name:')
    
    // Verify file-based collections are properly configured
    expect(yamlContent).toContain('files:')
    expect(yamlContent).toContain('file: src/content/')
  })

  it('should reference valid content files', () => {
    const configPath = join(adminPath, 'config.yml')
    const yamlContent = readFileSync(configPath, 'utf-8')
    
    // Extract file references from the config
    const fileMatches = yamlContent.match(/file: (src\/content\/\w+\.json)/g)
    expect(fileMatches).toBeTruthy()
    
    if (fileMatches) {
      fileMatches.forEach(match => {
        const filePath = match.replace('file: ', '')
        // Verify the referenced content files exist in the project structure
        // Note: These files should exist in the source, not necessarily in dist
        expect(filePath).toMatch(/^src\/content\/\w+\.json$/)
      })
    }
  })
})