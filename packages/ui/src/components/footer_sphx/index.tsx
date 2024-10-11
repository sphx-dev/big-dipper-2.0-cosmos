import { FC } from 'react';
import useStyles from '@/components/footer_sphx/styles';
import { SocialMedia } from './components';
import { Icon } from './components/Icon';

const FooterSphx: FC<{ className?: string }> = ({ className }) => {
  const { classes, cx } = useStyles();
  const year = new Date().getFullYear();

  return (
    <div className={cx(classes.root, className)}>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-vertical padding-xxlarge">
            <div className="padding-bottom padding-xxlarge">
              <div className="w-layout-grid footer_top-wrapper">
                <div className="footer_left-wrapper">
                  <a
                    href="/"
                    aria-current="page"
                    className="footer8_logo-link w-nav-brand w--current"
                  >
                    <Icon />
                  </a>
                </div>
              </div>
            </div>
            <div className="line-divider"></div>
            <div className="padding-top padding-medium">
              <div className="bottom-wrapper">
                <div className="legal-list">
                  <a href="https://www.sphx.io/privacy-policy" className="footer_legal-link">
                    Privacy Policy
                  </a>
                  <div className="divided">|</div>
                  <a href="https://www.sphx.io/terms-of-service" className="footer_legal-link">
                    Terms of Service
                  </a>
                  <div className="divided">|</div>
                  <a href="mailto:info@sphx.io" className="footer_legal-link">
                    Contact Us
                  </a>
                </div>
                <SocialMedia />
              </div>
            </div>
            <div className="padding-top padding-medium">
              <div className="footer8_bottom-wrapper">
                <p className="disclaimer-text">
                  Sphinx is a private company and our products are currently in development. The
                  information on this site is intended to provide information on our progress, which
                  is subject to change at the sole discretion of Sphinx. Nothing on this site should
                  be construed as a promise to performance. No one is entitled to any legal action
                  or claim of any type against Sphinx as a result of this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSphx;
