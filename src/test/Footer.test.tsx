import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer'

/**
 * Unit tests for Footer component admin link
 * Validates: Requirements 1.1
 */
describe('Footer Admin Link', () => {
  const renderFooter = () => {
    return render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  }

  it('should render admin link with correct href', () => {
    renderFooter()
    
    const adminLinks = screen.getAllByRole('link', { name: 'Admin' })
    expect(adminLinks.length).toBeGreaterThan(0)
    
    // Check the first admin link (they should all be the same)
    const adminLink = adminLinks[0]
    expect(adminLink.getAttribute('href')).toBe('/admin')
  })

  it('should open admin link in new tab with proper security attributes', () => {
    renderFooter()
    
    const adminLinks = screen.getAllByRole('link', { name: 'Admin' })
    const adminLink = adminLinks[0]
    
    expect(adminLink.getAttribute('target')).toBe('_blank')
    expect(adminLink.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('should be accessible in the footer navigation', () => {
    renderFooter()
    
    // Admin link should be present
    const adminLinks = screen.getAllByRole('link', { name: 'Admin' })
    expect(adminLinks.length).toBeGreaterThan(0)
    
    // Verify it's part of the footer navigation
    const adminLink = adminLinks[0]
    const footerNav = adminLink.closest('.footer-links')
    expect(footerNav).not.toBeNull()
  })
})