/**
 * CE.SDK Unsplash Image Editor Starterkit - Main Entry Point
 *
 * A design editor with Unsplash stock photos integrated as the primary image source.
 * Search and browse millions of free stock photos from Unsplash directly within the editor.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 * @see https://unsplash.com/documentation
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initUnsplashEditor } from './imgly';
import { resolveAssetPath } from './imgly/resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-unsplash-asset-source-user'

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Unsplash Configuration
// ============================================================================

const unsplashConfig = {
  unsplashApiUrl: undefined as string | undefined
  // unsplashApiUrl: 'https://your-proxy-server.com/unsplash-api'
};

// ============================================================================
// Initialize Unsplash Image Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize the editor with Unsplash integration
    await initUnsplashEditor(cesdk, unsplashConfig);
    // ============================================================================
    // Scene Loading
    // ============================================================================

    // Load the Unsplash demo scene from CDN
    // This scene showcases images that can be replaced with photos from Unsplash
    await cesdk.loadFromURL(
      resolveAssetPath('/assets/unsplash.scene')
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
