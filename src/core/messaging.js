// @flow

import { stringify } from 'qs';

/**
 * Builds a url that will launch reachify and init a message composer preloaded with content
 *
 * @param  {String} organization User organization
 * @param  {String} subject      Message subject
 * @param  {String} channel      Message channel
 * @param  {String} senderId     Channel integration id of sender
 * @param  {Array} recipients    Message recipients
 * @return {String}
 */
const buildMessageUrl = ({ organization, ...messageFields }: {
  organization: string,
  body: string,
  subject: string,
  senderId: string,
  channel: 'sms' | 'fax' | 'email',
  recipients: { value: string, label: string }[],
}) : string => {
  const queryString = stringify(messageFields);
  return `${organization}.app.reachify.io/inbox${queryString}`;
};

export { buildMessageUrl };
