'use client'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Only shown when the visitor arrived from another page on this site,
// so "back" never sends them off-site.
const BackButton = () => {

    const router = useRouter();
    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
        try {
            const referrer = document.referrer;
            if (referrer && new URL(referrer).hostname === window.location.hostname) {
                setShowBack(true);
            }
        } catch {
            // malformed referrer — don't show the button
        }
    }, []);

    if (!showBack) return null;

    return (
        <Row className='d-print-none'>
            <Col xs={12} className='mb-3'>
                <Button size="sm" className='fs-6' variant='light' onClick={() => router.back()}>← Back</Button>
            </Col>
        </Row>
    )
}

export default BackButton
