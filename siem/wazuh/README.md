# Wazuh integration

1. Send one compact JSON object per line to a file monitored by the Wazuh agent, for example `/var/log/defi-sentinel/alerts.jsonl`.
2. Copy `local_rules.xml` to `/var/ossec/etc/rules/defi_sentinel_rules.xml` on the Wazuh server.
3. Validate a sample before restarting:

   ```bash
   /var/ossec/bin/wazuh-logtest
   ```

4. Paste a sample from `../../docs/alert.example.json` and verify rule `110003` for the included critical alert.

The default Wazuh JSON decoder is sufficient for the flat scalar fields. Arrays of objects are retained as evidence but should not be used directly in XML field matching. Production correlation should also be implemented in the indexer/dashboard layer, where nested fields and time windows are easier to query.

Rule IDs `110000–110099` are reserved for this project. Adjust the range if it conflicts with an existing installation.
