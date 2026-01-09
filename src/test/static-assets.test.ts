import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

/**
 * Feature: admin-cms-fix, Property 2: Static assets are served with correct headers
 * 
 * This property test validates that static admin assets exist and have appropriate
 * file extensions that would result in correct MIME types when served by Firebase hosting.
 */
describe('Static Asset Serving Properties', () => {
  const distPath = join(process.cwd(), 'dist')
  const adminPath = join(distPath, 'admin')

  // Helper function to get all files recursively
  function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    try {
      const files = readdirSync(dirPath)
      
      files.forEach(file => {
        const fullPath = join(dirPath, file)
        if (statSync(fullPath).isDirectory()) {
          arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
        } else {
          arrayOfFiles.push(fullPath)
        }
      })
      
      return arrayOfFiles
    } catch {
      return arrayOfFiles
    }
  }

  it('should have admin directory with required files', () => {
    // Verify admin directory exists
    expect(() => statSync(adminPath)).not.toThrow()
    expect(statSync(adminPath).isDirectory()).toBe(true)
    
    // Verify required admin files exist
    const adminFiles = readdirSync(adminPath)
    expect(adminFiles).toContain('index.html')
    expect(adminFiles).toContain('config.yml')
  })

  it('should have proper file extensions for MIME type detection', () => {
    const allFiles = getAllFiles(distPath)
    
    // Property: For any static asset file, it should have a recognized extension
    // that Firebase hosting can serve with appropriate MIME types
    const validExtensions = [
      '.html', '.css', '.js', '.json', '.yml', '.yaml',
      '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif',
      '.woff', '.woff2', '.ttf', '.eot',
      '.ico', '.txt', '.xml'
    ]
    
    allFiles.forEach(filePath => {
      const hasValidExtension = validExtensions.some(ext => 
        filePath.toLowerCase().endsWith(ext)
      )
      
      // Skip files without extensions (like directories) or hidden files
      const fileName = filePath.split(/[/\\]/).pop() || ''
      const hasExtension = fileName.includes('.')
      const isHidden = fileName.startsWith('.')
      
      if (hasExtension && !isHidden) {
        expect(hasValidExtension).toBe(true)
      }
    })
  })

  it('should have valid HTML structure in admin index.html', () => {
    const adminIndexPath = join(adminPath, 'index.html')
    const htmlContent = readFileSync(adminIndexPath, 'utf-8')
    
    // Property: For any HTML file, it should have proper structure
    // that browsers can parse and serve correctly
    expect(htmlContent).toContain('<!doctype html>')
    expect(htmlContent).toContain('<html')
    expect(htmlContent).toContain('<head>')
    expect(htmlContent).toContain('<body>')
    expect(htmlContent).toContain('</html>')
    
    // Verify CMS-specific content
    expect(htmlContent).toContain('decap-cms')
    expect(htmlContent).toContain('Content Manager')
  })

  it('should have valid YAML structure in config.yml', () => {
    const configPath = join(adminPath, 'config.yml')
    const yamlContent = readFileSync(configPath, 'utf-8')
    
    // Property: For any YAML configuration file, it should have valid structure
    // Basic YAML validation - should not have tabs and should have proper structure
    expect(yamlContent).not.toContain('\t') // YAML should use spaces, not tabs
    expect(yamlContent).toContain('backend:')
    expect(yamlContent).toContain('collections:')
    
    // Should have proper indentation (multiple of 2 spaces)
    const lines = yamlContent.split('\n')
    lines.forEach((line) => {
      if (line.trim() && line.startsWith(' ')) {
        const leadingSpaces = line.match(/^ */)?.[0].length || 0
        expect(leadingSpaces % 2).toBe(0) // Should be multiple of 2
      }
    })
  })
})